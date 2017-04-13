const MainOrder = {  //主订单
    OrderNo: "0000",
    OrderUser: 0,
    ProdsNum: 0,
    OrderTime: "",
    OrderDetail: []
};

const DetailOrder = {  //子订单
    ProdID: 0,
    ProdNum: 0,
    ProdPrice: 0.00
};
export default{ //简单工厂模式
    create(name, ...args) //创建一个实体类，
    {
        if (name == "main") {
            MainOrder.OrderNo = args[0];
            MainOrder.OrderUser = args[1];
            MainOrder.ProdsNum = args[2];
            return MainOrder;
        }
        else if (name == "detail") {
            return DetailOrder;
        }
    }
}
