export function generateLinkName( nameProduct ){
    return nameProduct.replaceAll(' ', '-').toLowerCase()
}