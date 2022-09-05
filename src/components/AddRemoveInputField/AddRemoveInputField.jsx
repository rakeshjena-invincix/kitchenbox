// import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const AddRemoveInputField = ({ handlePrice }) => {
  const [inputFields, setInputFields] = useState([
    {
      dish: "",
      price: "",
      quantity: "",
      total: "",
    },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        dish: "",
        price: "",
        quantity: "",
        total: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, event) => {
    const { name, value } = event.target;

    const list = [...inputFields];

    list[index]["dish"] = selectedOptions.label;
    list[index]["price"] = selectedOptions.item_price;
    list[index][name] = value;
    console.log(list);
    setInputFields(list);
    handlePrice(list, selectedOptions);
  };

  const fakeDatas = [
    {
      item_id: 101,
      item_category: "veg",
      label: "Paneer Butter Masala",
      item_price: 159,
      item_quantity: 300,
      item_metric: "gram",
      item_description: "soft paneer with mouth melting spices in butter",
      container_type: "300 gram plastic round",
      cooking_style: "Punjabi Special",
    },
    {
      item_id: 102,
      item_category: "non-veg",
      label: "Chicken Butter Masala",
      item_price: 189,
      item_quantity: 500,
      item_metric: "gram",
      item_description: "boneless chicken with mouth melting spices in butter",
      container_type: "300 gram plastic round",
      cooking_style: "Punjabi Special",
    },
    {
      item_id: 103,
      item_category: "non-veg",
      label: "Chicken Alu Curry",
      item_price: 179,
      item_quantity: 500,
      item_metric: "ml",
      item_description: "4 pc chicken with 2 pcs alu curry",
      container_type: "300 gram plastic round",
      cooking_style: "Odisha Special",
    },
    { label: "French Toast", item_price: 69 },
    { label: "Tomato Onion Omelette With Butter Toast", item_price: 69 },
    { label: "Spinach Omelette With Butter Toast", item_price: 79 },
    { label: "Boiled Egg With Butter Toast", item_price: 79 },
    { label: "Chilli Cheese Toast", item_price: 79 },
    { label: "Cheese Omelette With Butter Toast", item_price: 99 },
    { label: "Veg Hot And Sour Soup", item_price: 79 },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {inputFields.map((data, index) => {
            const { dish, price, quantity, total } = data;
            return (
              <div className="row my-3" key={index}>
                <div className="col-11 d-flex ">
                  <div className="row">
                    <div
                      className="form-group col-sm-3 p-1 mx-3"
                      // style={{
                      //   width: "100%",
                      // }}
                    >
                      {/* <input
                      type="text"
                      onChange={(event) => handleChange(index, event)}
                      value={dish}
                      name="dish"
                      className="form-control"
                      placeholder="Enter Dish Name"
                      autoComplete="off"
                    /> */}
                      <Autocomplete
                        disablePortal
                        id="dish"
                        options={fakeDatas}
                        onChange={(event, value) => setSelectedOptions(value)}
                        isOptionEqualToValue={(option, value) =>
                          option.label === value.label
                        }
                        // style={{ width: 100 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            id="dish"
                            label="Dish"
                            value={dish}
                            style={{
                              width: "100%",
                            }}
                          />
                        )}
                      />
                    </div>
                    <div
                      className="form-group col-sm-3 p-1  mx-3"
                      // style={{
                      //   width: "100%",
                      // }}
                    >
                      {/* <input
                      type="price"
                      onChange={(event) => handleChange(index, event)}
                      value={price}
                      name="price"
                      className="form-control"
                      placeholder="Price"
                      autoComplete="off"
                    /> */}
                      <TextField
                        disabled
                        id="price"
                        label="Price"
                        variant="outlined"
                        type=""
                        onChange={(event) => handleChange(index, event)}
                        value={price}
                        name="price"
                        // style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      className="form-group col-sm-2 p-1  mx-3"
                      // style={{
                      //   width: "100%",
                      // }}
                    >
                      {/* <input
                      type="number"
                      onChange={(event) => handleChange(index, event)}
                      value={quantity}
                      name="quantity"
                      className="form-control"
                      placeholder="Quantity"
                      autoComplete="off"
                    /> */}
                      <TextField
                        id="quantity"
                        label="Quantity"
                        variant="outlined"
                        type="number"
                        onChange={(event) => handleChange(index, event)}
                        value={quantity}
                        name="quantity"
                        // style={{ width: "100%" }}
                      />
                    </div>

                    <div
                      className="form-group col-sm-2 p-1  mx-3"
                      style={
                        {
                          // width: "100%",
                        }
                      }
                    >
                      {/* <input
                      type="number"
                      onChange={(event) => handleChange(index, event)}
                      value={total}
                      name="total"
                      className="form-control"
                      placeholder="Total"
                      autoComplete="off"
                      disabled
                    /> */}
                      <TextField
                        disabled
                        id="total"
                        label="Total"
                        variant="outlined"
                        type="number"
                        // onChange={(event) => handleChange(index, event)}
                        value={price * quantity}
                        name="total"
                        // style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  {inputFields.length !== 1 ? (
                    // <button
                    //   className="btn btn-outline-danger"
                    //   onClick={removeInputFields}
                    // >
                    //   x
                    // </button>
                    <AiFillDelete
                      onClick={removeInputFields}
                      color="#EB1D36"
                      style={{
                        cursor: "pointer",
                        fontSize: "18px",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}

          <div className="row">
            <div className="col-sm-12 text-end">
              {/* <button
                className="btn btn-outline-success "
                onClick={addInputField}
              >
                +
              </button> */}

              <Button
                variant="contained"
                size="small"
                style={{
                  marginTop: "5px",
                  backgroundColor: "#393E46",
                  borderRadius: "50px",
                }}
                onClick={addInputField}
              >
                Add Item
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRemoveInputField;
