"use client";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const currencies = [
  {
    value: "Living Room",
    label: "Living Room",
  },
  {
    value: "Store",
    label: "Store",
  },
  {
    value: "Bedroom",
    label: "Bedroom",
  },
  {
    value: "Bathroom",
    label: "Bathroom",
  },
  {
    value: "Office",
    label: "Office",
  },
  {
    value: "Kitchen",
    label: "Kitchen",
  },

  {
    value: "Balcony",
    label: "Balcony",
  },
];
export const Form = () => {
  const supabase = createClient(
    "https://dgahpknmwckcozpfuyrp.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON!
  );
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (
    file: File,
    name: string,
    value: string,
    valuee: string
  ) => {
    setLoading(true);
    const { data, error } = await supabase.storage
      .from("Images")
      .upload("/" + file.name, file, { upsert: true });
    const publicUrl = supabase.storage
      .from("Images")
      .getPublicUrl("/" + data!.path);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: publicUrl.data.publicUrl,
        value,
        valuee,
      }),
    });

    let newPhoto = await res.json();

    setTimeout(() => {}, 1300);
    await fetch(`/api/todo`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        src: newPhoto[1],
      }),
    });
    router.refresh();
    setLoading(false);
  };
  const [file, setFile] = React.useState<File>();
  const [name, setName] = React.useState("Nothing");
  const [uploadUrl, setUploadUrl] = React.useState("");
  const [valuee, setValuee] = React.useState("Living Room");
  const [value, setValue] = React.useState("");
  return (
    <div className=" space-y-12 ">
      <div className="text-lg font-medium">
        Upload an image and tell us what you want for your room.
      </div>
      <div>
        <div className="space-y-4">
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            <div className="font-bold text-xl">Upload file</div>
            <VisuallyHiddenInput
              type="file"
              accept=".png"
              onChange={(e) => {
                setName(e.target.files![0].name);
                setFile(e.target.files![0]);
              }}
            />
          </Button>
          <br></br>
          <div>{name} uploaded!</div>
        </div>
      </div>
      <div>
        <div className="text-white">
          <TextField
            id="outlined-basic"
            label={<div style={{ color: "#1976D2" }}>Tell us more</div>}
            variant="outlined"
            maxRows="3"
            multiline
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            sx={{ width: "80%" }}
            inputProps={{ style: { color: "white" } }}
            focused
          />
        </div>
      </div>
      <div>
        <div style={{ width: "100%" }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select Room Type"
            defaultValue="Living Room"
            value={valuee}
            helperText="Please select your currency"
            sx={{ width: "80%" }}
            focused
            SelectProps={{ style: { color: "white" } }}
            onChange={(e) => {
              setValuee(e.target.value);
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={(e) => {
            if (file != null) {
              {
                handleSubmit(file, name, value, valuee);
              }
            } else {
              window.alert("You need to upload an image");
            }
          }}
        >
          {!loading ? (
            <div className="font-bold text-xl">RENDER DESIGNS</div>
          ) : (
            <div className="font-bold text-xl">PLEASE WAIT..</div>
          )}
        </Button>
      </div>
    </div>
  );
};
