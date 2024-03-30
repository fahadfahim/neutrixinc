import React from 'react'

const InfoItem = ({ title, icon }: any) => (
    <li key={title} className='flex items-center mb-[10px]'>
        {icon && <span className="info-item-icon mr-2 text-[#fff]">{icon}</span>}
        <span className="text-[14px] text-[#fff]">{title}</span>
    </li>
);

const FooterComponent = ({ title, data }: any) => {
    return (
        <div className='mb-[60px]'>
            <h6 className=' font-semibold text-[20px] text-[#fff] mb-[20px]' dangerouslySetInnerHTML={{ __html: title }} />

            <ul>
                <ul>
                    {data.map((item: any) => (
                        <InfoItem key={item.title || item} title={item.title} icon={item.icon} />
                    ))}
                </ul>
            </ul>
        </div>
    )
}

export default FooterComponent