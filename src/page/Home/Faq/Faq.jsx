import Faq from 'react-faq-component';

import './faq.css'

const FaqSection = () => {
   
//    FAQ Data
    const data = {
        rows: [
          {
            title: "Lorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
          },
          {
            title: "Nunc maximus, magna at ultricies elementum",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
          },
          {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
          },
          {
            title: "What is the package version",
            content: "v1.0.5"
          }]
      }
      
//config  FAQ   
const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};

  return (
    <div className="bg-[#EDF5EF]  ">
      <div className="row ">
        <div className="md:col-6 h-[450px] sm:h-[650px] p-0">
           
        
           
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="faq" />
            
           
        </div>

        {/* FAQ Part */}
        <div className="md:col-6 bg-[#1F3C8F] p-6 sm:p-10">
            <h4 className='text-white'>Question & Answer</h4>
            <h1 className='text-white text-4xl my-4'>Any Question? Find Here.</h1>
            <p className='text-white my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In velit quas expedita aspernatur maxime sapiente veniam quos reprehenderit, possimus id.</p>
        <Faq data={data} config={config} />
        </div>
        
      </div>
    </div>
  );
};

export default FaqSection;
