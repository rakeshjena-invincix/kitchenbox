import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
const AddRemoveInputField = ({ handlePrice }) => {
  const [quantity, setQuantity] = useState(null);

  const [currentItemId, setCurrentItemId] = useState(null);

  const [inputFields, setInputFields] = useState([
    {
      item_category: "",
      item_name: "",
      item_price: 0,
      quantity: "",
      item_quantity: "",
      item_metric: "",
      item_description: "",
      container_type: "",
      cooking_style: "",
      total: 0,
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    console.log("called ", quantity);

    console.log("selectedOptions ", selectedOptions);

    console.log("selectedOptions index", currentItemId);

    if (quantity) {
      const list = [...inputFields];
      console.log("object");
      // list[index]["dish"] = selectedOptions.label;
      list[currentItemId]["item_price"] = selectedOptions.item_price;
      list[currentItemId]["quantity"] = quantity;

      list[currentItemId]["total"] = selectedOptions.item_price * quantity;
      console.log("list ", list);

      setInputFields((oldFields) => (oldFields = list));

      handlePrice(list);
    }
    // setQuantity(0);
  }, [quantity]);

  const handleQuantityChange = (item_id, quantity, value) => {
    console.log(item_id, quantity, value);
    setSelectedOptions(value);
    setQuantity(quantity);
    setCurrentItemId(item_id);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        item_category: "",
        item_name: "",
        item_price: 0,
        quantity: "",
        item_quantity: "",
        item_metric: "",
        item_description: "",
        container_type: "",
        cooking_style: "",
        total: 0,
      },
    ]);
  };

  const removeInputFields = (index) => {
    console.log(index);
    const rows = [...inputFields];
    rows.splice(index, 1);
    // rows.pop();
    // const restData =
    console.log("ROWS->>>>>>>>>>", rows, inputFields);

    handlePrice(rows);
    setInputFields(rows);

    // setInputFields(
    //   rows.filter((elem, i) => {
    //     return i !== index;
    //   })
    // );
    // handlePrice(
    //   rows.filter((elem, i) => {
    //     return i !== index;
    //   })
    // );
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    console.log("Working", setQuantity, quantity);
    console.log("selectedOptions ", selectedOptions);
    const list = [...inputFields];

    console.log((list[index]["item_price"] = selectedOptions.item_price));
    console.log(list);

    console.log("nnn ", selectedOptions["item_name"]);
    console.log("ppp ", list[index]["item_name"]);

    if (list[index]["item_name"] !== selectedOptions["item_name"]) {
      console.log("selectedOptions new", selectedOptions);
      list[index]["quantity"] = 0;
      list[index]["total"] = 0;
    }

    // list[index]["dish"] = selectedOptions.label;
    list[index]["item_price"] = selectedOptions.item_price;
    // list[index]["item_category"] = selectedOptions.item_category;
    list[index]["item_quantity"] = selectedOptions.item_quantity;
    list[index]["item_metric"] = selectedOptions.item_metric;

    list[index][name] = value;
    setInputFields(list);
    handlePrice(list);
    // setQuantity(0);
  };

  useEffect(() => {
    setQuantity();
  }, [selectedOptions]);

  // const handler = useCallback(debounce(index, event) => handleChange(index, event), 1500, []);
  // useEffect(() => {
  console.log("quantity", quantity);
  //   if (quantity === null) {
  //     setQuantity(0);
  //   }
  //   // setQuantity();
  // }, [quantity]);

  return (
    <div className="container">
      <div className="">
        <div className="">
          {inputFields.map((data, index) => {
            const { item_name, item_price, quantity, total, item_id } = data;
            return (
              <div className="" key={index}>
                <div className="">
                  <div className="row mb-3">
                    <div className="form-group col-sm-4 pb-2 ">
                      <Autocomplete
                        disableClearable
                        id="dish"
                        options={fakeDatas}
                        value={data}
                        filterSelectedOptions
                        onSelect={(event) => handleChange(index, event)}
                        onChange={(event, value) => setSelectedOptions(value)}
                        getOptionLabel={(option) => option.item_name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Enter/Select Dish"
                            name="item_name"
                            style={{
                              width: "100%",
                            }}
                          />
                        )}
                      />
                    </div>

                    <div className="form-group col-sm-2 pb-2">
                      <TextField
                        disabled
                        id="price"
                        label="Price"
                        variant="outlined"
                        type="text"
                        onChange={(event) => handleChange(index, event)}
                        value={item_price}
                        name="item_price"
                      />
                    </div>
                    <div className="form-group col-sm-2  pb-2 ">
                      <TextField
                        id="quantity"
                        label="Quantity"
                        variant="outlined"
                        type="number"
                        InputProps={{
                          inputProps: { min: "0", max: "100000", step: "1" },
                        }}
                        onChange={(event) => {
                          console.log("object", event.target.value);
                          console.log(quantity);
                          handleQuantityChange(index, event.target.value, data);
                        }}
                        defaultValue={quantity ? quantity : 0}
                        value={parseInt(quantity)}
                        name="quantity"
                      />
                      {/* <input value={quantity} /> */}
                    </div>

                    <div className="form-group col-sm-2  pb-2 ">
                      <TextField
                        disabled
                        id="total"
                        label="Total"
                        variant="outlined"
                        type="number"
                        onChange={(event) => handleChange(index, event)}
                        value={total}
                        name="total"
                      />
                    </div>
                    <>
                      <div className="col-2">
                        <div
                          style={{
                            background: "#FFC727",
                            width: "40px",
                            height: "40px",
                            margin: "8px auto",
                            textAlign: "center",
                            padding: "7px",
                            borderRadius: "12.695px",
                            cursor: "pointer",
                          }}
                          onClick={() => removeInputFields(index)}
                        >
                          <Delete
                            sx={
                              {
                                // fontSize: "18px",
                              }
                            }
                          />
                        </div>
                      </div>
                    </>
                  </div>
                </div>
                {/* {inputFields.length !== 1 ? ( */}

                {/* ) : (
                  ""
                )} */}
              </div>
            );
          })}

          <div className="row">
            <div className="col-sm-12 text-start pb-3">
              <Button
                variant="contained"
                size="small"
                style={{
                  // marginTop: "5px",
                  width: "161px",
                  height: "50px",
                  backgroundColor: "#FFC727",
                  borderRadius: "12.695px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
                onClick={addInputField}
              >
                Add New
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRemoveInputField;

const fakeDatas = [
  {
    item_id: 101,
    item_category: "veg",
    item_name: "Paneer Butter Masala",
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
    item_name: "Chicken Butter Masala",
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
    item_name: "Chicken Alu Curry",
    item_price: 179,
    item_quantity: 500,
    item_metric: "ml",
    item_description: "4 pc chicken with 2 pcs alu curry",
    container_type: "300 gram plastic round",
    cooking_style: "Odisha Special",
  },

  {
    item_id: 104,
    item_name: "French Toast",
    item_price: 69,
    item_category: "veg",
    item_quantity: 250,
    item_metric: "gram",
  },
  {
    item_id: 105,
    item_name: "Tomato Onion Omelette With Butter Toast",
    item_price: 69,
    item_quantity: 200,
    item_metric: "gram",
    item_category: "non-veg",
  },
  {
    item_id: 106,
    item_name: "Spinach Omelette With Butter Toast",
    item_price: 79,
    item_quantity: 300,
    item_metric: "gram",

    item_category: "non-veg",
  },
  {
    item_id: 107,
    item_name: "Boiled Egg With Butter Toast",
    item_price: 79,
    item_quantity: 300,
    item_metric: "gram",
    item_category: "non-veg",
  },

  {
    item_id: 108,
    item_name: "Chilli Cheese Toast",
    item_price: 79,
    item_category: "veg",
    item_quantity: 500,
    item_metric: "gram",
  },
  {
    item_id: 109,
    item_name: "Cheese Omelette With Butter Toast",
    item_price: 99,
    item_quantity: 500,
    item_metric: "gram",
    item_category: "non-veg",
  },
  {
    item_id: 110,
    item_name: "Veg Hot And Sour Soup",
    item_price: 79,
    item_quantity: 500,
    item_metric: "gram",
    item_category: "veg",
  },
];
