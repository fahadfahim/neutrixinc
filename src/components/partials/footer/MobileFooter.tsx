import React from 'react'
import AccordionItem from '../../shared/accordionItem';

const MobileFooter = () => {
  const content1 = (
    <p>
      Monday - Friday, 9:00 am - 6:00 pm ET
      +1 (248) 541-2800
      customerservice@usaunderwriters.com
    </p>
  );

  const content2 = (
    <p>
      This is the content for the second accordion item. You can customize the
      content for each item to provide specific information or functionality.
    </p>
  );

  const content3 = (
    <p>
      Monday - Friday, 9:00 am - 6:00 pm ET
      +1 (248) 541-2800
      customerservice@usaunderwriters.com
    </p>
  );
  return (
    <div className="flex flex-col ">
      <div className='border border-[#757575]  rounded-[10px] width-95 mx-auto py-[21px] mb-[20px]'>
        <AccordionItem title="USA Underwriting" content={content1} />
        <AccordionItem title="Customer Service & Support" content={content2} />
        <AccordionItem title="Claims Administration" content={content3} />
      </div>
      <div className='border border-[#757575] rounded-[10px] width-95 mx-auto py-[21px]'>
        <AccordionItem title="Underwriting Support" content={content1} />
        <AccordionItem title="Policy Suspensions And Coverage Approvals" content={content2} />
        <AccordionItem title="RIP Qualification Question And Submissions for Coverage" content={content3} />
      </div>
    </div>
  )
}

export default MobileFooter