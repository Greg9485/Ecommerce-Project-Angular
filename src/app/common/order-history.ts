export class OrderHistory {
    
    
    constructor(public id: string, 
                public orderTrackingnumber: string,
                public totalPrice: number, 
                public totalQuantity: number, 
                public dateCreated: Date){}
}
