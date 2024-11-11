import { products } from "../data/products";
import { sales } from "../data/sales";
import { customers } from "../data/customers";

// Función para identificar clientes VIP (aquellos que han gastado más de $1,000,000)
export function vipCustomers() {
  // Calcular el gasto total por cliente acumulando el precio del producto y la cantidad vendida
  const spendingByCustomer = sales.reduce((acc, sale) => {
    const product = products.find((p) => p.id === sale.productId);
    if (product) {
      // Sumar el gasto al cliente en el acumulador
      acc[sale.customerId] =
        (acc[sale.customerId] || 0) + product.price * sale.quantity;
    }
    return acc;
  }, {} as Record<number, number>);

  // Filtrar y devolver los clientes cuyo gasto total supera el umbral de VIP ($1,000,000)
  return customers
    .filter((customer) => spendingByCustomer[customer.id] > 1000000)
    .map((customer) => ({
      ...customer,
      totalSpent: spendingByCustomer[customer.id], // Incluir el gasto total en el objeto del cliente
    }));
}
