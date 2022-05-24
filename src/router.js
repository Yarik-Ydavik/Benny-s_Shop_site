import Adres from './page/Adress'
import Accortiment from './page/Assotyment'
import Glavnaya from './page/homePAGE'
import Torgovi_Zal from './page/torgovy_zal'
import {GLAVNAYA, TORGOVI_ZAL, ASSORTIMENT, ADDRES, SHOP_ROUTE} from './utils/const'

export const ROUTES =[
    {
        path: GLAVNAYA,
        Component: Glavnaya,
    }
    ,
    {
        path: TORGOVI_ZAL,
        Component: Torgovi_Zal,
    }
    ,
    {
        path: ASSORTIMENT,
        Component: Accortiment,
    }
    ,
    {
        path: ADDRES,
        Component: Adres,
    }
    ,
    {
        path: SHOP_ROUTE,
        Component: Glavnaya
    }
    
]
