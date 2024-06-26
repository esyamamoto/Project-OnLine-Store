export async function getCategories() {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(
  categoryId: string,
  product: string,
) {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${product}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}

export async function getProductById(productId: string) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const URL_API = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}

export async function getQuery(
  query: string,
) {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}

export async function getProductsByCategorie(categoryId: string) {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}
