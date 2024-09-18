import { createRouter, createWebHistory } from "vue-router";
import Customer from "../components/customers/CustomerComponent.vue";
import Product from "../components/products/ProductComponent.vue";
import Order from "../components/orders/ListOrder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "customer",
      component: Customer,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
    },
  ],
});

export default router;
