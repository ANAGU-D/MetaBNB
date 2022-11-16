import React,{Component} from 'react'
import img1 from  '../assets/placetostay/frame1.png'
import img2 from '../assets/placetostay/frame2.png'
import img3 from  '../assets/placetostay/frame3.png'
import img4 from '../assets/placetostay/frame4.png'
import img5 from  '../assets/placetostay/frame5.png'
import img6 from '../assets/placetostay/frame6.png'
import img7 from  '../assets/placetostay/frame7.png'
import img8 from '../assets/placetostay/frame8.png'
import img9 from  '../assets/placetostay/frame9.png'
import img10 from '../assets/placetostay/frame10.png'
import img11 from  '../assets/placetostay/frame11.png'
import img12 from '../assets/placetostay/frame12.png'
import img13 from  '../assets/placetostay/frame13.png'
import img14 from '../assets/placetostay/frame14.png'
import img15 from  '../assets/placetostay/frame15.png'
import img16 from '../assets/placetostay/frame16.png'
import star from '../assets/homeimgs/Star 2.svg'
import Filter from '../components/filter'


class Places extends Component{

    constructor(){
        super();
        this.state ={
            images:[
                {
                    img:img1,
                    id:'pic1',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img2,
                    id:'pic2',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img3,
                    id:'pic3',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img4,
                    id:'pic4',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img5,
                    id:'img5',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img6,
                    id:'pic6',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img7,
                    id:'pic7',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img8,
                    id:'pic8',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img9,
                    id:'pic9',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img10,
                    id:'pic10',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img11,
                    id:'pic11',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img12,
                    id:'pic12',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img13,
                    id:'pic13',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img14,
                    id:'pic14',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img15,
                    id:'pic15',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img16,
                    id:'pic16',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                }
            ]
        };
    }
    render(){
        return (
                <div>
                    <Filter/>
                    <div className='cardlist'>               
                        {
                            this.state.images.map(showimg=> 
                        <div className='card' key={showimg.id}>   
                            <div className="cardimg">
                                <img src={showimg.img}  alt='Homes' className='houseimage'/>
                            </div>
                            <div className="cardtext">
                                <p><span className='houseName'>{showimg.name}</span><span className='housePrice'>{showimg.price}</span></p>

                                <p><span className='distance'>2345km away</span><span className='availability'>{showimg.availability}</span></p>
                                <div className="rating">
                                    <img src={star} alt='star rating' key='starone'/>
                                    <img src={star} alt='star rating' key='startwo'/>
                                    <img src={star} alt='star rating' key='starthree'/>
                                    <img src={star} alt='star rating' key='starfour'/>
                                    <img src={star} alt='star rating' key='starfive'/>
                                </div>
                            </div>
                        </div>
                            
                            )
                        }    
                
                    </div>
                </div>
          );
        
    }
}
export default Places