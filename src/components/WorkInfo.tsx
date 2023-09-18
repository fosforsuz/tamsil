import React from "react";
import { FcClock } from "react-icons/fc";
import PhoneIcon from '@mui/icons-material/Phone';

export const WorkInfo = () => {
    return (
        <div className="-z-20 relative mx-8 mb-8 flex justify-between items-center border-b-2 pt-3 pb-3 font-medium md:mx-16 lg:mx-32">
            <div className="flex w-full justify-center items-center">
                <FcClock size={52} className="mx-4" />
                <div className="text-center">
                    <p className="text-2xl text-[#0D6E95]">Çalışma Saatleri</p>
                    <p className="text-sm">09:00 - 18:00 Pazartesi - Cumartesi 09:00 - 18:00</p>
                </div>
            </div>
            <div className="flex w-full justify-center border-l-2">
                <PhoneIcon color="primary" style={{ height: 52, width: 52 }}  />
                <div className="text-center">
                    <p className="text-[#0D6E95]">Bizi Arayabilirsiniz...</p>
                    <p className="text-sm"> (0374) 215 84 45</p>
                </div>
            </div>
        </div>
    );
};
