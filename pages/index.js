import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import Image from 'next/image';
import kazuno from '../public/img/kazuno.png';
import coding from '../public/img/coding.png';

import { useState } from 'react';

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>Kazuno's Portofolio</title>
				<meta name="description" content="Generated by Kazuno's Portofolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900">
				<section className="min-h-screen ">
					<nav className="flex justify-between py-10 mb-12">
						<h1 className="text-xl font-burtons">Developedbyed</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className="text-2xl cursor-pointer"
								/>
							</li>
							<li>
								<a
									href=""
									className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r to-teal-500 from-cyan-500"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="p-10 text-center">
						<h2 className="py-2 text-5xl font-medium text-teal-600 md:text-6xl">Kazuno</h2>
						<h3 className="py-2 text-2xl md:text-3xl">Frontend Developer</h3>
						<p className="max-w-lg py-5 mx-auto leading-8 text-gray-800 text-md md:text-lg">
							Freelancer providing service for programming needs.
						</p>
					</div>
					<div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
						<AiFillTwitterCircle className="text-2xl cursor-pointer" />
						<AiFillLinkedin className="text-2xl cursor-pointer" />
						<AiFillYoutube className="text-2xl cursor-pointer" />
					</div>
					<div className="relative mx-auto mt-20 overflow-hidden rounded-full md:h-96 md:w-96 bg-gradient-to-b from-teal-500 w-80 h-80">
						<Image alt="coba" src={kazuno} layout="fill" objectFit="cover" />
					</div>
				</section>

				<section>
					<div>
						<h3 className="py-1 text-3xl">Service I offer : </h3>
						<p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officiis dolor deserunt modi
							accusantium veniam. <span className="text-teal-500"> A voluptate, repellendus amet ex ullam </span>
							aliquam placeat totam esse consequuntur exercitationem quaerat nemo et?
						</p>
						<p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod quo provident sint pariatur
							distinctio quis maxime, <span className="text-teal-500">error</span> nam
							<span className="text-teal-500">dolorem</span> cum maiores voluptatem omnis natus illo! Laboriosam
							quas harum vel!
						</p>
					</div>
					<div className="gap-10 lg:flex">
						<div className="flex flex-col items-center p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white">
							<Image alt="coba" src={coding} width={100} height={100} />
							<h3 className="pt-8 pb-2 text-lg font-medium">Slicing Website Design</h3>
							<p className="py-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quo quos,
								aliquam veniam
							</p>
							<h4 className="py-4 text-teal-600">Programming tools I use</h4>
							<p className="py-1 text-gray-800">Visual Studio Code</p>
							<p className="py-1 text-gray-800">Figma</p>
						</div>
						<div className="flex flex-col items-center p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white">
							<Image alt="coba" src={coding} width={100} height={100} />
							<h3 className="pt-8 pb-2 text-lg font-medium">Slicing Website Design</h3>
							<p className="py-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quo quos,
								aliquam veniam
							</p>
							<h4 className="py-4 text-teal-600">Programming tools I use</h4>
							<p className="py-1 text-gray-800">Visual Studio Code</p>
							<p className="py-1 text-gray-800">Figma</p>
						</div>
						<div className="flex flex-col items-center p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white">
							<Image alt="coba" src={coding} width={100} height={100} />
							<h3 className="pt-8 pb-2 text-lg font-medium">Slicing Website Design</h3>
							<p className="py-2">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quo quos,
								aliquam veniam
							</p>
							<h4 className="py-4 text-teal-600">Programming tools I use</h4>
							<p className="py-1 text-gray-800">Visual Studio Code</p>
							<p className="py-1 text-gray-800">Figma</p>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h3 className="py-1 text-3xl">Portofolio </h3>
						<p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officiis dolor deserunt modi
							accusantium veniam. <span className="text-teal-500"> A voluptate, repellendus amet ex ullam </span>
							aliquam placeat totam esse consequuntur exercitationem quaerat nemo et?
						</p>
						<p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod quo provident sint pariatur
							distinctio quis maxime, <span className="text-teal-500">error</span> nam
							<span className="text-teal-500">dolorem</span> cum maiores voluptatem omnis natus illo! Laboriosam
							quas harum vel!
						</p>
					</div>
					<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
						<div className="flex-1 basis-1/3">
							<Image
								alt="coba"
								src={coding}
								className="object-cover rounded-lg dark:bg-white"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								alt="coba"
								src={coding}
								className="object-cover rounded-lg dark:bg-white"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								alt="coba"
								src={coding}
								className="object-cover rounded-lg dark:bg-white"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								alt="coba"
								src={coding}
								className="object-cover rounded-lg dark:bg-white"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								alt="coba"
								src={coding}
								className="object-cover rounded-lg dark:bg-white"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								alt="coba"
								src={coding}
								className="object-cover rounded-lg dark:bg-white"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
