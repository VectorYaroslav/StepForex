function trand(){


    const first_candle_Y_max_percent = 20         // Set first candle max Y point (percent)
    const first_candle_Y_min_percent = 10          // Set first candle min Y point (percent)
    const last_candle_Y_max_percent = 55          // Set last candle max Y point (percent)
    const last_candle_Y_min_percent = 45          // Set last candle min Y point (percent)

    const height = $(document).height()                                        // Get document height (px)
    const first_candle_Y_max = height/100*first_candle_Y_max_percent           // Get first candle max Y point - top (px)
    const last_candle_Y_max = height/100*last_candle_Y_max_percent             // Get last candle max Y point - top (px)
    const first_candle_Y_min = height/100*first_candle_Y_min_percent           // Get first candle min Y point - bottom (px)
    const last_candle_Y_min = height/100*last_candle_Y_min_percent             // Get last candle min Y point - bottom (px)
    const first_candle_X = 0                                                   // Set first candle X point (px)
    const candle_width = 2*2+6+1                                               // Get candle width(left border(2px) + right border(2px) + width(6px) + distance between candles (1px))

    body = document.body                                                       


    /********** Create candles **********/
    const candles_count = $(document).width()/candle_width                                                      // Calculate candles count
    const candle_vertical_step = (last_candle_Y_max - first_candle_Y_max)/candles_count                         // Calculate candles top step (or next choose)
    //const candle_vertical_step = (last_candle_Y_min_percent - first_candle_Y_min_percent)/candles_count       // Calculate candles top step (or prev choose)
    current_candle_Y_max = first_candle_Y_max                                                                   // Set current candle Y max (top) point
    current_candle_Y_min = first_candle_Y_min                                                                   // Set current candle Y min (bottom) point
    current_candle_X = first_candle_X                                                                           // Set current candle X min (left) point
    current_candle_bottom = 0                                                                                   // Set current candle bottom point

    for(var i=1; i<candles_count; i++){                                                                         

        let candle = createElementWithClass("div", ["candle"])
        current_candle_Y_max = current_candle_Y_max + candle_vertical_step
        current_candle_Y_min = current_candle_Y_min + candle_vertical_step

        needle_top = createElementWithClass("div", ["needle", "top"])
        needle_bottom = createElementWithClass("div", ["needle", "bottom"])

        if(i == 1){
            current_candle_bottom =  getRandomNumber(current_candle_Y_min, current_candle_Y_max)
            candle.style.bottom = current_candle_bottom
            const candle_height_period = current_candle_Y_max - current_candle_bottom
            current_candle_height = getRandomNumber(1, candle_height_period)
            candle.style.height = current_candle_height
            if(Math.random() < 0.5){
                candle.classList.add ("up")
                current_candle_bottom = current_candle_bottom + current_candle_height

                const needle_top_height_period = current_candle_Y_max - current_candle_bottom - current_candle_height
                needle_top.style.height = getRandomNumber(1, needle_top_height_period)

                const needle_bottom_height_period = current_candle_bottom - current_candle_Y_min
                needle_bottom.style.height = getRandomNumber(1, needle_bottom_height_period)
            }else{
                candle.classList.add ("down")
                const needle_top_height_period = current_candle_Y_max - current_candle_bottom
                needle_top.style.height = getRandomNumber(1, needle_top_height_period)

                const needle_bottom_height_period = current_candle_bottom - current_candle_height - current_candle_Y_min
                needle_bottom.style.height = getRandomNumber(1, needle_bottom_height_period)
            }
        }else{
            if(Math.random() < 0.5){
                candle.classList.add ("up")
                candle.style.bottom = current_candle_bottom
                const candle_height_period = current_candle_Y_max - current_candle_bottom
                current_candle_height = getRandomNumber(1, candle_height_period)
                candle.style.height = current_candle_height
                current_candle_bottom = current_candle_bottom + current_candle_height

                const needle_top_height_period = current_candle_Y_max - current_candle_bottom
                needle_top.style.height = getRandomNumber(1, needle_top_height_period)

                const needle_bottom_height_period = current_candle_bottom - current_candle_Y_min
                needle_bottom.style.height = getRandomNumber(1, needle_bottom_height_period)
            }else{
                candle.classList.add ("down")
                const candle_height_period = current_candle_bottom - current_candle_Y_min
                current_candle_height = getRandomNumber(1, candle_height_period)
                candle.style.height = current_candle_height
                candle.style.bottom = current_candle_bottom - current_candle_height
                current_candle_bottom = current_candle_bottom - current_candle_height

                const needle_top_height_period = current_candle_Y_max - current_candle_bottom
                needle_top.style.height = getRandomNumber(1, needle_top_height_period)

                const needle_bottom_height_period = current_candle_bottom - current_candle_Y_min
                needle_bottom.style.height = getRandomNumber(1, needle_bottom_height_period)
            }
        }
        
        candle = appendElements(candle, [needle_top, needle_bottom])
        current_candle_X = current_candle_X + candle_width
        candle.style.left = current_candle_X

        body.append(candle)
    }
    /********** Create candles(END) **********/

}