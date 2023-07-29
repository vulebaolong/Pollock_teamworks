import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import style from "../Header.module.css";
import imgLogo from "../../../assets/Logo.png";
import imgBag from "../../../assets/icon_bag.png";
import imgSearch from "../../../assets/icon_search.png";
import { Button, Drawer, Space } from "antd";
import ButtonMe from "../../../components/Button";
import { useState } from "react";
import Logo from "../../../components/Logo/Logo";

function HeaderMobile() {
    const [isDrawer, setIsDrawer] = useState(false);
    const showDrawer = () => {
        setIsDrawer(true);
    };
    const onClose = () => {
        setIsDrawer(false);
    };
    return (
        <div className="flex justify-between h-full items-center">
            {/* LOGO */}
            <Logo />

            {/* CONTROL */}
            <div className="flex items-center gap-[30px]">
                {<Button className="bg-white/80" onClick={showDrawer} icon={<MenuOutlined />}></Button>}
                <Drawer
                    className="!bg-primary_active"
                    title={
                        <div>
                            <Logo onClick={onClose} />
                        </div>
                    }
                    closable={false}
                    placement="right"
                    width="100%"
                    open={isDrawer}
                    extra={
                        <Space>
                            <Button type="text" onClick={onClose} shape="circle" icon={<CloseOutlined />}></Button>
                        </Space>
                    }
                >
                    <div className="">
                        <div className="flex items-center gap-[30px] mb-20 justify-center">
                            <div className="flex items-center gap-[20px]">
                                <div className="">
                                    <img src={imgSearch} alt="imgSearch" />
                                </div>

                                <div className="">
                                    <img src={imgBag} alt="imgBag" />
                                </div>
                            </div>
                            <ButtonMe type="transparent" size="small" text="Sign Up" />
                        </div>

                        <div className="flex items-center justify-center h-full">
                            <div className="flex flex-col mx-auto  items-center gap-16 ">
                                <span className={`${style.nav_active} text-white text-4xl font-medium leading-[24px]`}>Home</span>
                                <span className="text-white text-4xl font-medium leading-[24px]">Services</span>
                                <span className="text-white text-4xl font-medium leading-[24px]">About</span>
                                <span className="text-white text-4xl font-medium leading-[24px]">Pages</span>
                                <span className="text-white text-4xl font-medium leading-[24px]">Blog</span>
                                <span className="text-white text-4xl font-medium leading-[24px]">Contact</span>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}
export default HeaderMobile;
