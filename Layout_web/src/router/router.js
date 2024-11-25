import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/QuoteFormView.vue'
import QuoteOptionsView from '../views/QuoteOptionsView.vue'
import QuoteDetailsView from '../views/QuoteDetailsView.vue'
import QuoteConfirmationView from '../views/QuoteConfirmationView.vue'

const routes = [
  { path: '/formbasic', name: 'FormBasic', component: Form },
  { path: '/quote-options', name: 'QuoteOptions', component: QuoteOptionsView },
  { path: '/quote-details', name: 'QuoteDetails', component: QuoteDetailsView },
  { path: '/quote-confirmation', name: 'QuoteConfirmation', component: QuoteConfirmationView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
