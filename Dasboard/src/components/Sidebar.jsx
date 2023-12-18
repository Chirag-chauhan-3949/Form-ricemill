import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const navigation = [
  {
    name: "Add Forms",
    current: false,
    children: [
      { name: "Add Rice Mill", href: "/Addricemill" },
      { name: "Add New Transporter", href: "/Add_New_Transporter" },
      { name: "Add New Truck", href: "/Add_New_Truck" },
      { name: "Add New Society", href: "/Add_New_Society" },
      { name: "Add Agreement", href: "/Add_Agreement" },
    ],
  },
  {
    name: "Awak Forms",
    current: false,
    children: [{ name: "Dhan Awak", href: "/Dhan_Awak" }],
  },
  {
    name: "Jawak Forms",
    current: false,
    children: [
      { name: "Broken Jawak", href: "/Brokenjawak" },
      { name: "Husk Jawak", href: "/Huskjawak" },
      { name: "Nakkhi Jawak", href: "/Nakkhijawak" },
      { name: "Bran Jawak", href: "/Branjawak" },
      { name: "Bhusi", href: "/Bhusi" },
    ],
  },

  {
    name: "Forms",
    current: false,
    children: [
      { name: "Rice Deposit", href: "/Ricedeposit" },
      { name: "Dalali Dhan", href: "/Dalalidhan" },
      { name: "Lot Number Master", href: "/Lotnumbermaster" },
      { name: "Dhan Rice Sociesties Rate", href: "/Dhanricesocietiesrate" },
      { name: "Frk", href: "/Frk" },
      { name: "Suda Patrak", href: "/Sudapatrak" },
      { name: "Add Do", href: "/Add_Do" },
      { name: "Do Panding", href: "/Dopanding" },
      { name: "Transporter Master", href: "/Transportermaster" },
      { name: "Paddy Sales", href: "/Paddysales" },
      { name: "Dhan Transporting", href: "/Dhantransporting" },
      { name: "Mohan Food Paddy", href: "/Mohanfoodpaddy" },
      { name: "Kochia", href: "/Add_kochia" },
    ],
  },
  {
    name: "View Data",
    current: false,
    children: [
      { name: "View Rice Mill", href: "/View_RiceMill" },
      { name: "View Agreement", href: "/View_Agreement" },
      { name: "View Trucks", href: "/View_Truck" },
      { name: "View Transporter", href: "/View_Transporter" },
      { name: "View Societies", href: "/View_Societies" },
      { name: "View_Dhan_Awak", href: "/View_Dhan_Awak" },
      { name: "View_RiceDeposit", href: "/View_RiceDeposit" },
      { name: "View_Dalali_Dhan", href: "/View_Dalali_Dhan" },
      { name: "View Broken Jawak", href: "/View_broken_jawak" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <div className="flex flex-col w-64 overflow-y-auto border-r border-gray-200">
        <div className="flex h-16 items-center justify-center border-b border-gray-200">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul role="list" className="py-4">
            {navigation.map((item) => (
              <li key={item.name}>
                {!item.children ? (
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current ? "bg-gray-50" : "hover:bg-gray-50",
                      "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            item.current ? "bg-gray-50" : "hover:bg-gray-50",
                            "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                          )}
                        >
                          <ChevronRightIcon
                            className={classNames(
                              open
                                ? "rotate-90 text-gray-500"
                                : "text-gray-400",
                              "h-5 w-5 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Disclosure.Button>
                        <Disclosure.Panel as="ul" className="mt-1 px-2">
                          {item.children.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.href}
                                className={classNames(
                                  subItem.current
                                    ? "bg-gray-50"
                                    : "hover:bg-gray-50",
                                  "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                )}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main section */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="w-full h-full p-6">{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;
