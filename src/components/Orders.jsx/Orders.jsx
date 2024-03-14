import { Button, Label, Modal, TextInput, Dropdown } from "flowbite-react";
import { useContext, useRef, useState } from "react";
import { orderContext } from "../../Layout";

export function Orders() {
  const [openModal, setOpenModal] = useState(false);
  const productInput = useRef(null);

  const [orders, setOrders] = useContext(orderContext);

  const validateForm = () => {
    if (formState.id && formState.cname && formState.date && formState.status)
      return true;
    else alert("Please fill out all fields");
  };

  const handleDeleteRow = (targetIndex) => {
    setOrders(orders.filter((_, idx) => idx !== targetIndex));
  };

  const [rowToEdit, setRowToEdit] = useState(null);

  const [formState, setFormState] = useState({
    id: "",
    cname: "",
    date: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setOrders(
      orders.map((product, idx) => {
        if (idx !== rowToEdit) return product;
        else return formState;
      })
    );
    setOpenModal(false);
  };

  const handleEdit = (idx) => {
    setFormState(orders[idx]);
    setRowToEdit(idx);
    console.log(formState);
    setOpenModal(true);
  };

  const options = [
    { label: "Accepted", id: 1 },
    { label: "Cancelled", id: 2 },
    { label: "Out For Delivery", id: 3 },
    { label: "Delivered", id: 4 },
  ];

  return (
    <>
      <section className="mx-auto w-full max-w-7xl pl-24 py-10">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all orders. You can add edit or delete existing
              ones.
            </p>
          </div>
          <div>
            {/* <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new product
            </button> */}
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              //   onClick={(e) => {
              //     if (e.target.className === "modal")
              //         setOpenModal(false);
              //   }}
              initialFocus={productInput}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="modal space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Edit Order
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="order_id" value="Order ID" />
                    </div>
                    <TextInput
                      name="id"
                      ref={productInput}
                      placeholder="Toy"
                      onChange={handleChange}
                      value={formState.id}
                      disabled
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="cname" value="Customer Name" />
                    </div>
                    <TextInput
                      name="cname"
                      onChange={handleChange}
                      value={formState.cname}
                      disabled
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="order_date" value="Order Date" />
                    </div>
                    <TextInput
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      disabled
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="status" value="Status" />
                    </div>
                    <select
                      name="status"
                      value={formState.status}
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <option name={option.id}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <Button color="dark" type="submit" onClick={handleSubmit}>
                      Save
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-8 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Order ID</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Customer Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Order Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Status
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {orders.map((product, idx) => (
                      <tr
                        key={idx}
                        className="divide-x divide-gray-200"
                      >
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {product.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">
                            {product.cname}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {product.date}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {product.status == "Accepted" ? (
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {product.status}
                            </span>
                          ) : product.status == "Out For Delivery" ? (
                            <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {product.status}
                            </span>
                          ) : product.status == "Delivered" ? (
                            <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {product.status}
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {product.status}
                            </span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <Dropdown label="Actions" inline>
                            <Dropdown.Item onClick={() => handleEdit(idx)}>
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteRow(idx)}>
                              Delete
                            </Dropdown.Item>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
