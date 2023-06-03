function sortSelect(option, obj){
    switch (option) {
        case 'Menor preço':
        return obj.sort((a, b) => a.price - b.price);
        case 'Maior preço':
        return obj.sort((a, b) => b.price - a.price);
        case 'Ordernar por':
        return obj.sort(() => Math.random() - 0.5);
        default:
        return obj;
    }
}

export default sortSelect;