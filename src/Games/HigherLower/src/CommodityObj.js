let fetchedCommodities = [];

// excludeCommodity guards against an immediate repeat right after the
// history resets (fetchedCommodities alone can't catch that case).
function fetchCommodity(commodityArr, excludeCommodity = null) {
    if (fetchedCommodities.length >= Math.floor(commodityArr.length * 0.9)) {
        fetchedCommodities = [];
    }

    let r;
    do {
        r = Math.floor(Math.random() * commodityArr.length);
    } while (
        fetchedCommodities.includes(r) ||
        (excludeCommodity && commodityArr[r].name === excludeCommodity.name)
    );

    fetchedCommodities.push(r);
    return commodityArr[r];
}

export { fetchCommodity };