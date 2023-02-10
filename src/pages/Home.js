import React, { useRef, useState } from 'react';
import PackingLogo from '../assets/svg/packingLogo';
import Button from '../UI/button';
import Input from '../UI/input';

const Home = () => {

    const [showDetails, setShowDetails] = useState(false);

    const myRef = useRef(null);

    const detailsToggler = async (e) => {
        await setShowDetails(!showDetails);
        await myRef.current.scrollIntoView({behavior: 'smooth'});
    }



    return (
        <div className='cursor-default flex flex-col items-center relative'>
            <section className='flex justify-center items-center flex-wrap gap-28 px-10 lg-px-40 mb-44'>
                <div>
                    <h2 className='text-7xl tracking-wide'>FRESH PUFF</h2>
                    <h1 className='animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-mainPurple via-mainMagenta to-mainYellow font-semibold text-9xl tracking-tight relative -left-10'>
                    <span className='text-black font-normal text-4xl tracking-wide italic'>in</span>
                    DevOps
                    </h1>
                    <p className='max-w-xs text-additionalTextGray'>
                        Full self driving DevOps
                        process allow
                        you to keep
                        focus on the most valuable
                        things for your business.
                    </p>
                </div>
                    <PackingLogo/>
            </section>

            <section className='flex flex-col gap-y-8 mb-44'>
                {showDetails === false && <Button title={'Learn more'} onClick={detailsToggler}/>}
                {showDetails && <p ref={myRef} className='py-20 px-52'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus cupiditate cumque quisquam ea quibusdam est, saepe veritatis dolores. Fugit quaerat maiores modi neque earum unde laborum error temporibus tempora!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo, accusantium ipsa eius atque cum amet nostrum totam nobis dolor quod? Veritatis optio eius molestiae repudiandae voluptatem architecto dolorum alias?
                    Molestiae repellendus perferendis numquam quod rerum. Natus esse ut iste suscipit doloremque corporis voluptates, quia accusamus accusantium, ipsum nostrum laudantium fugit eum. Perspiciatis harum dignissimos, aliquid aspernatur officia nihil quis.
                    Vitae sed quae voluptatum ad, odio eligendi suscipit, blanditiis illum nam voluptatibus tempora autem! Ratione quaerat dolorem, totam illo, suscipit atque fugiat dignissimos deserunt aliquid molestiae distinctio ducimus ipsum ex.
                </p>}
            </section>

            <Input label='input' type='email'/>

        </div> 
        );
};

export default Home;