import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  {
    name: "Forms",
    current: false,
    children: [
      { name: "Add Rice Mill", href: "/Addricemill" },
      { name: "Add New Transporter", href: "/Add_New_Transporter" },
      { name: "Add New Truck", href: "/Add_New_Truck" },
      { name: "Add New Society", href: "/Add_New_Society" },
      { name: "Add Agreement", href: "/Add_Agreement" },
      { name: "Lot Number Master", href: "/Lotnumbermaster" },
      { name: "Dhan Rice Sociesties Rate", href: "/Dhanricesocietiesrate" },
      { name: "Frk", href: "/Frk" },
      { name: "Suda Patrak", href: "/Sudapatrak" },
      { name: "Add Do", href: "/Add_Do" },
      { name: "Dhan Awak", href: "/Dhan_Awak" },
      { name: "Transporter Master", href: "/Transportermaster" },
      // { name: "Mohan Food Paddy", href: "/Mohanfoodpaddy" },
      { name: "Dhan Transporting", href: "/Dhantransporting" },
      { name: "Dalali Dhan", href: "/Dalalidhan" },
      { name: "Paddy Sales", href: "/Paddysales" },
      { name: "Do Panding", href: "/Dopanding" },
    ],
  },
  {
    name: "View Data",
    current: false,
    children: [
      { name: "View Agreement", href: "/View_Agreement" },
      { name: "View Trucks", href: "/View_Truck" },
      { name: "View Transporter", href: "/View_Transporter" },
      { name: "View Societies", href: "/View_Societies" },
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
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-gray-50" : "hover:bg-gray-50",
                      "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                    )}
                  >
                    {item.name}
                  </a>
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
                              <Disclosure.Button
                                as="a"
                                href={subItem.href}
                                className={classNames(
                                  subItem.current
                                    ? "bg-gray-50"
                                    : "hover:bg-gray-50",
                                  "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                )}
                              >
                                {subItem.name}
                              </Disclosure.Button>
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
