

// const getCropperImageUrl = (url: string) => {
//     const target = '/media/';
//     const index = url.indexOf('target') + target.length;
//     console.log(url);
//     console.log(url.slice(0, index) + 'crop/600/400/' + url.slice(index));
//     return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
// }

// export default getCropperImageUrl;
const getCropperImageUrl = (url: string) => {
    if (!url) return '';
    const target = '/media/';
    const index = url.indexOf(target) + target.length;
    const newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    return newUrl;
}

export default getCropperImageUrl;