function sadeEded(eded) {
    let i = 2;
    while (i < eded) {
        if (eded > 0 && eded % i == 0) {
            console.log("sade deyil");
            return;
        }
        i++;
    }
    // for (let i = 2; i < eded; i++) {
    //     if (eded%i == 0) {
    //         console.log('sade deyil');
    //         return;
    //     }
    // }
    //ikiside isleyir forlu ve while li
    console.log('sadedir');
}
sadeEded(5);