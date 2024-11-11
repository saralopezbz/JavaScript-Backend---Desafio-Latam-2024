import { products } from "../data/products";
import { sales } from "../data/sales";

// Función para obtener los 3 productos más vendidos
export function bestSellingProducts() {
  // Calcular la cantidad vendida por producto usando reduce
  const salesByProduct = sales.reduce((acc, sale) => {
    acc[sale.productId] = (acc[sale.productId] || 0) + sale.quantity;
    return acc;
  }, {} as Record<number, number>);

  // Crear un array de productos con cantidad vendida y ordenar en orden descendente
  return products
    .map((product) => ({
      ...product,
      quantitySold: salesByProduct[product.id] || 0,
    }))
    .sort((a, b) => b.quantitySold - a.quantitySold)
    .slice(0, 3); // Obtener solo los primeros 3
}
