import { Widgets } from "./dataConnectors.js"

const resolvers = {
  getProduct: ({ id }) =>{
    return new Promise(async (resolve) => {
     const data = await Widgets.findOne({_id: id})
     resolve(data)
        
    })
  },
  getAllProducts: () => {
    return Widgets.find({})
  },
  // TODO: fix store of array -
  createProduct:  ({input})=> {
    const newWidget = new Widgets({
      name: input.name, 
      description: input.description,
      price: input.price ,
      soldout: input.soldout,
      inventory: input.inventory,
      stores: input.stores
    })
    newWidget.id = newWidget._id 
    return new Promise(async (resolve) => {
       await newWidget.save()
       resolve(newWidget)
    })
  },
  // TODO: test and fix me
  updateProduct: ({input}) => {
    return new Promise(async (resolve) => {
     await Widgets.findByIdAndUpdate({_id: input.id},input, {new: true}).then(() => console.log("updated successfully"))
     .catch((err) => console.log(err))
      
    })
  },
  deleteProduct : ({id}) => {
    return new Promise(async (resolve) => {
      await Widgets.remove().then(() => console.log("items deleted successfully"))
    })
    .catch((err) => {
      console.log("fail to remove the items")
    } )
  }

}

export default resolvers