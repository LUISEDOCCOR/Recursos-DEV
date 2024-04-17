import { useState } from "react";
import { CategoriesSvg } from "./CategoriesSvg";
import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { Spin } from "./Spin";

export const SideBar = ({ callback }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    key: "",
    label: "",
    id: ""
  });
  const [Categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState();

  const getData = async () => {
    setLoading(true);
    const { data: categories, error } = await supabase
      .from("categories")
      .select("*");


    if (error) {
      console.log(error);
      return;
    }

    setCategories(categories);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (category) => {
    callback(category);
    setSelectedCategory(category);
  };

  return (
    <aside className="aside fixed px-12 pt-6 font-semibold border-cGrey border-r-2 w-72">
      <h2
        onClick={() => {
          handleClick({ key: "", label: "", id: "" });
        }}
        className="text-2xl mb-8 cursor-pointer"
      >
        Categorías
      </h2>
      {!isLoading ? (
        <ul className="space-y-6 ">
          {Categories.map(({ label, key, id }) => (
            <li
              key={key}
              onClick={() => {
                handleClick({
                  key: key,
                  label: label,
                  id: id
                });
              }}
              className={`flex items-center gap-2 text-xl
                                hover:text-white transition-colors cursor-pointer
                                ${
                                  selectedCategory.key == key
                                    ? "text-white"
                                    : "text-cGrey"
                                }`}
            >
              {label}
              <CategoriesSvg label={key} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center">
          <Spin />
        </div>
      )}
    </aside>
  );
};
