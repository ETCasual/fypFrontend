import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import { definitions } from '../../types/supabase'
import { supabase } from '../../lib/supabase'

const Header = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					swipeToSlide: true
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					swipeToSlide: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 470,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: true
				}
			}
		]
	}

	const router = useRouter()

	const fetchSeller = async () => {
		const { data, error } = await supabase.from('seller').select('*')
		console.log(data)
		return { data, error }
	}

	fetchSeller()
	return (
		<div className="header section__padding">
			<div className="header-content">
				<div>
					<h1>Discover, collect, and sell extraordinary products!</h1>
					<img
						className="shake-vertical"
						src={'/assets/coin.png'}
						alt=""
					/>
				</div>
			</div>
			<div className="header-slider">
				<h1>Top Sellers</h1>
				<Slider {...settings} className="slider">
					<div className="slider-card">
						<p className="slider-card-number">1</p>
						<div className="slider-img">
							<img src={'/assets/seller1.jpg'} alt="" />
							<img
								src={'/assets/verify.png'}
								className="verify"
								alt=""
							/>
						</div>

						<p
							className="slider-card-name"
							onClick={() => router.push('/profile/Rian')}
						>
							James Bond
						</p>

						<p className="slider-card-price">
							5.250 <span>ETH</span>
						</p>
					</div>
					<div className="slider-card">
						<p className="slider-card-number">2</p>
						<div className="slider-img">
							<img src={'/assets/seller2.png'} alt="" />
							<img
								src={'/assets/verify.png'}
								className="verify"
								alt=""
							/>
						</div>

						<p
							className="slider-card-name"
							onClick={() => router.push('/profile/Rian')}
						>
							Rian Leon
						</p>

						<p className="slider-card-price">
							4.932 <span>ETH</span>
						</p>
					</div>
					<div className="slider-card">
						<p className="slider-card-number">3</p>
						<div className="slider-img">
							<img src={'/assets/seller3.png'} alt="" />
							<img
								src={'/assets/verify.png'}
								className="verify"
								alt=""
							/>
						</div>

						<p
							className="slider-card-name"
							onClick={() => router.push('/profile/Rian')}
						>
							Lady Young
						</p>

						<p className="slider-card-price">
							4.620 <span>ETH</span>
						</p>
					</div>
					<div className="slider-card">
						<p className="slider-card-number">4</p>
						<div className="slider-img">
							<img src={'/assets/seller4.png'} alt="" />
							<img
								src={'/assets/verify.png'}
								className="verify"
								alt=""
							/>
						</div>

						<p
							className="slider-card-name"
							onClick={() => router.push('/profile/Rian')}
						>
							Black Glass
						</p>

						<p className="slider-card-price">
							4.125 <span>ETH</span>
						</p>
					</div>
					<div className="slider-card">
						<p className="slider-card-number">5</p>
						<div className="slider-img">
							<img src={'/assets/seller5.png'} alt="" />
							<img
								src={'/assets/verify.png'}
								className="verify"
								alt=""
							/>
						</div>

						<p
							className="slider-card-name"
							onClick={() => router.push('/profile/Rian')}
						>
							Budhiman
						</p>

						<p className="slider-card-price">
							3.921 <span>ETH</span>
						</p>
					</div>
					<div className="slider-card">
						<p className="slider-card-number">6</p>
						<div className="slider-img">
							<img src={'/assets/seller6.jpg'} alt="" />
							<img
								src={'/assets/verify.png'}
								className="verify"
								alt=""
							/>
						</div>

						<p
							className="slider-card-name"
							onClick={() => router.push('/profile/Rian')}
						>
							Alex
						</p>

						<p className="slider-card-price">
							3.548 <span>ETH</span>
						</p>
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default Header