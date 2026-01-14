// Orders store
export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    selectedOrderId: null,
  }),
  actions: {
    fetchOrders() {
      return new Promise((resolve) => {
        // mock fetch
        setTimeout(() => {
          this.orders = [
            { id: 101, no: 'ORD-20260101-01', passenger: 'Alice', status: 'Paid' },
            { id: 102, no: 'ORD-20260102-02', passenger: 'Bob', status: 'Pending' },
            { id: 103, no: 'ORD-20260103-03', passenger: 'Charlie', status: 'Refunded' }
          ]
          resolve(this.orders)
        }, 200)
      })
    },
    addOrder(order) {
      this.orders.push(order)
    },
    updateOrder(id, patch) {
      const idx = this.orders.findIndex(o => o.id === id)
      if (idx !== -1) Object.assign(this.orders[idx], patch)
    },
    removeOrder(id) {
      this.orders = this.orders.filter(o => o.id !== id)
    },
    setSelectedOrder(id) {
      this.selectedOrderId = id
    }
  }
})
