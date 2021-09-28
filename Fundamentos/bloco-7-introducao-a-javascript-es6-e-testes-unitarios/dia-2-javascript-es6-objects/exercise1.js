const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701"

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
const anaSilveira = order.order.delivery.deliveryPerson
const rafaelAndrade = order.name
const telefone = order.phoneNumber
const rua = order.address.street
const number = order.address.number
const ap = order.address.apartment
return `Olá ${anaSilveira}, entrega para: ${rafaelAndrade}, Telefone: ${telefone}, R. ${rua}, Nº: ${number}. AP: ${ap}`
}
customerInfo(order)

"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
 order.name = 'Luiz Silva'
 const pizzas = Object.keys(order.order.pizza)
 const drinks = order.order.drinks.coke.type
 const total = order.payment.total = 50
 return `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${total},00.}`
}

console.log(orderModifier(order));


