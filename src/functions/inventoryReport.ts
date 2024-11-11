import { products } from "../data/products";

// Función para generar un reporte de inventario con el estado del stock
export function inventoryReport() {
  // Mapear cada producto para incluir el estado de su inventario basado en el stock disponible
  return products.map((product) => {
    let status;
    if (product.stock < 10) {
      status = "Low Stock"; // Si el stock es menor a 10, estado: "Bajo Inventario"
    } else if (product.stock <= 20) {
      status = "In Stock"; // Si el stock está entre 10 y 20, estado: "En Stock"
    } else {
      status = "Enough Stock"; // Si el stock es mayor a 20, estado: "Suficiente Stock"
    }

    // Retornar el reporte de cada producto con su estado de stock
    return {
      name: product.name,
      category: product.category,
      stock: product.stock,
      status: status,
    };
  });
}
