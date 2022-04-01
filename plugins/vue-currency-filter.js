import Vue from 'vue'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter, {"symbol":"R$","thousandsSeparator":".","thousandCount":3,"fractionCount":2,"fractionSeparator":",","symbolPosition":"front","symbolSpacing":true})
