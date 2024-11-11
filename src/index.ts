import { bestSellingProducts } from "./functions/bestSellingProducts";
import { revenueByCategory } from "./functions/revenueByCategory";
import { vipCustomers } from "./functions/vipCustomers";
import { inventoryReport } from "./functions/inventoryReport";

// Ejecutar cada función y mostrar resultados en la consola
console.log("Best Selling Products:", bestSellingProducts()); // Muestra los productos más vendidos
console.log("Revenue by Category:", revenueByCategory()); // Muestra ingresos por categoría
console.log("VIP Customers:", vipCustomers()); // Muestra los clientes VIP
console.log("Inventory Report:", inventoryReport()); // Muestra el reporte de inventario
