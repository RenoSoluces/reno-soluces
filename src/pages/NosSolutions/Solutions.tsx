import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowRight, Battery, Building2, Droplets, Flame, Layers3, Sun, Wind, Warehouse } from 'lucide-react';
import AirEau from '../../assets/AirEau1.jpeg';
import Solar from '../../assets/Panneaux1.jpeg';
import Exterior from '../../assets/Exterieur1.jpeg';
import Comble from '../../assets/Combles1.jpeg';
import Floor from '../../assets/PlancherBas1.jpg';
import Thermo from '../../assets/BallonThermo1.jpg';
import BatteryImg from '../../assets/Batterie1.jpg';
import AirAir from '../../assets/AirAir1.jpeg';

type Props={onPageChange:(page:string)=>void};
const items=[
 {title:'Pompe à chaleur Air/Eau',page:'pompe-chaleur-air-eau',image:AirEau,icon:Droplets,text:'Une solution de chauffage à étudier selon votre logement, votre isolation et votre installation existante.'},
 {title:'Pompe à chaleur Air/Air',page:'pompe-chaleur-air-air',image:AirAir,icon:Wind,text:'Chauffage et rafraîchissement pour les logements compatibles avec cette solution.'},
 {title:'Photovoltaïque',page:'panneaux-photovoltaiques',image:Solar,icon:Sun,text:'Produisez de l’électricité pour votre logement et étudiez l’autoconsommation.'},
 {title:'Batterie de stockage',page:'batterie',image:BatteryImg,icon:Battery,text:'Stockez une partie de votre production solaire pour adapter son usage à vos besoins.'},
 {title:'Isolation des combles',page:'isolation-combles',image:Comble,icon:Warehouse,text:'Traitez un poste important de l’enveloppe du logement et améliorez le confort.'},
 {title:'Isolation par l’extérieur',page:'isolation-exterieur',image:Exterior,icon:Building2,text:'Une solution pour améliorer l’enveloppe du bâtiment tout en travaillant l’aspect de la façade.'},
 {title:'Isolation du plancher bas',page:'isolation-sous-sol',image:Floor,icon:Layers3,text:'Réduisez les échanges thermiques avec les espaces non chauffés lorsque le logement s’y prête.'},
 {title:'Chauffe-eau thermodynamique',page:'chauffe-eau-thermodynamique',image:Thermo,icon:Flame,text:'Une production d’eau chaude qui utilise les calories de l’air.'},
];
export default function Solutions({onPageChange}:Props){return <div className="bg-gray-50 min-h-screen"><Header activeSection="solutions" onSectionChange={()=>{}} onPageChange={onPageChange}/><main>
 <section className="py-20 bg-gray-50"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-16 items-end"><div><div className="eyebrow"><span/> NOS SOLUTIONS</div><h1 className="mt-4 text-5xl font-bold text-gray-900">Des travaux différents, une même exigence de clarté.</h1></div><p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Reno Soluces vous aide à identifier le type de projet correspondant à votre besoin, puis à vous orienter vers un professionnel partenaire lorsque votre demande entre dans son domaine d’intervention.</p></div></section>
 <section className="pb-24"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{items.map(({title,page,image,icon:Icon,text})=><button key={page} onClick={()=>onPageChange(page)} className="group text-left bg-white border border-gray-100 overflow-hidden"><div className="relative h-72 overflow-hidden"><img src={image} alt={title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"/><div className="absolute left-5 bottom-5 text-white flex items-center gap-3"><Icon size={19}/><span className="font-semibold">{title}</span></div></div><div className="p-6"><p className="text-gray-600 leading-relaxed min-h-[72px]">{text}</p><span className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-800">Découvrir <ArrowRight size={16}/></span></div></button>)}</div></div></section>
 <section className="py-20 bg-emerald-900"><div className="max-w-5xl mx-auto px-4 text-center text-white"><div className="eyebrow justify-center"><span/> VOTRE PROJET</div><h2 className="mt-4 text-4xl md:text-5xl font-bold">Vous ne savez pas quelle solution choisir ?</h2><p className="mt-5 text-emerald-100 text-lg max-w-2xl mx-auto">Décrivez simplement votre logement et votre projet. Nous vous aidons à cadrer la première étape.</p><button onClick={()=>onPageChange('contact')} className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-900 px-7 py-4 rounded-full font-bold">Décrire mon projet <ArrowRight size={17}/></button></div></section>
 </main><Footer onPageChange={onPageChange}/></div>}
