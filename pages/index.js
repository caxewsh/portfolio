import Image from 'next/image'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import { SiTailwindcss, SiReact, SiMui } from 'react-icons/si'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png' 
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Axel RENAULT Portfolio</title>
        <meta name="descrption" content="Genereated by Axe"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' dark:text-white text-xl font-burtons'>developedbyaxel</h1>
            <ul className=' flex item-center'>
              <li className=' dark:text-white'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl'/>
              </li>
              <li> <a className=' text-white bg-gradient-to-r from-cyan-500 to-teal-500 texte-white px-4 py-2 rounded-md ml-8' 
                href="#">
                Resume</a> </li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Axel Renault</h2>
            <h3 className=' dark:text-teal-700 text-2xl py-2 md:text-3xl'>Intégrateur/Developpeur front-end</h3>
            <p className=' text-md py-5 leading-8 text-gray-800 dark:text-gray-600 md:text-xl max-w-lg mx-auto'>
            Ingénieur d'intégration avec 3 ans et 3 mois d'expérience en développement front-end. Maîtrise de HTML, CSS, JavaScript, React. Expert en bonnes pratiques de développement et d'accessibilité. 
            Approche méthodique et créative.
            </p>
          </div>
      
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin className=' '/>
            <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} fill style={{objectFit:"contain"}}/>
          </div>
        </section>

        <section>
                      
            <div className='lg:pb-1 py-8'>
              <div className='text-center'>                
                <h3 className='text-3xl py-1'>Services I offer</h3>
                <p className='text-md py-5 text-gray-600 md:text-xl max-w-lg mx-auto'>
                  Since the beginning of my journey as a freelance designer and
                  developer, I've done remote work for
                  <span className="text-teal-500"> agencies </span>
                    consulted for <span className="text-teal-500">startups </span>
                    and collaborated with talanted people to create digital products
                    for both business and consumer use.
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer from a wide range of services, including brand design,
                    programming and teaching.
                </p>
              </div>

            </div>
            <div className='lg:flex'>
            <div className=' lg:flex gap-10'>
              <div className=' dark:bg-slate-700 text-center shadow-xl p-10 rounded-xl my-10 '>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={design} width={100} height={100} />
              </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>Design originaux</h3>
                <p className="py-2 ">
                  Créer des designs élégants adaptés à vos besoins en suivant
                   la théorie de base de la conception.
                </p>
                <h4 className='text-2xl py-4 text-teal-600'>Libs de design maîtrisés :</h4>
                <p className=' flex text-xl mx-24 items-center gap-2 text-gray-800 dark:text-teal-600' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Tailwind CSS <SiTailwindcss className='' /> </p>
                <p className=' flex text-xl mx-24 items-center gap-2 text-gray-800 dark:text-teal-600' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Material UI <SiMui /> </p>
                <p className=' flex text-xl mx-24 items-center gap-2 text-gray-800 dark:text-teal-600' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>React Icons <SiReact /> </p>
              </div>
            </div>

            <div className='lg:flex gap-10'>
              <div className=' dark:bg-slate-700 text-center shadow-xl p-10 rounded-xl my-10'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={code} width={100} height={100} />
              </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Desings</h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800'>Photoshop</p>
                <p className='text-gray-800'>Illustrator</p>
                <p className='text-gray-800'>Figma</p>
              </div>
            </div>
            
            <div className='lg:flex gap-10' >
              <div className=' dark:bg-slate-700 text-center shadow-lg p-10 rounded-xl my-10' >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image src={consulting} width={100} height={100} />
              </div>
                <div className='text-center p-10'>
              
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Desings</h3>
                  <p className="py-2">
                    Creating elegant designs suited for your needs following core
                    design theory.
                  </p>
                  <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                  <p className='text-gray-800'>Photoshop</p>
                  <p className='text-gray-800'>Illustrator</p>
                  <p className='text-gray-800'>Figma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className=' text-center p-10 text-3xl py-1'>Portfolio</h3>
            <p className='text-center dark:text-gray-600 text-md py-2 leading-8 text-gray-800'>
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
            <div>
              <div className='basis-1/3 flex-1'>
                <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
            <div>
              <div className='basis-1/3 flex-1'>
                <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
            <div>
              <div className='basis-1/3 flex-1'>
                <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
            <div>
              <div className='basis-1/3 flex-1'>
                <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
            <div>
              <div className='basis-1/3 flex-1'>
                <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}

//