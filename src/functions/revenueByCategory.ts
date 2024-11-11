import { products } from "../data/products";
import { sales } from "../data/sales";

// Función para calcular ingresos por cada categoría de producto
export function revenueByCategory() {
  return sales.reduce((acc, sale) => {
    const product = products.find((p) => p.id === sale.productId);
    if (product) {
      // Sumar los ingresos de cada venta al total de la categoría correspondiente
      acc[product.category] =
        (acc[product.category] || 0) + product.price * sale.quantity;
    }
    return acc;
  }, {} as Record<string, number>);
}
