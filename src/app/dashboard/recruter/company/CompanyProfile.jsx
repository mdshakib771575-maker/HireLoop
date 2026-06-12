"use client";

import { useState } from "react";
import {
  Input,
  Button,
  Select,
  Label,
  ListBox,
  TextArea,
  Form,
} from "@heroui/react";

import { MapPin, Upload, Check } from "lucide-react";
import { CreateCompany } from "@/lib/actions/companies";
import toast from "react-hot-toast";


const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Other",
];

const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "1000+",
];

export default function CompanyProfile({recruiter,recruiterCompany}) {

  const [company, setCompany] = useState(recruiterCompany);
  const [logo, setLogo] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData(e.target);

  //     let logoUrl = "";

  //     if (logo) {
  //       const imageFormData = new FormData();
  //       imageFormData.append("image", logo);

  //       const uploadRes = await fetch(
  //         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
  //         {
  //           method: "POST",
  //           body: imageFormData,
  //         }
  //       );

  //       const uploadData = await uploadRes.json();

  //       logoUrl = uploadData.data.display_url;
  //     }

  //     const companyData = {
  //       companyName: formData.get("companyName"),
  //       industry: formData.get("industry"),
  //       website: formData.get("website"),
  //       location: formData.get("location"),
  //       employeeCount: formData.get("employeeCount"),
  //       description: formData.get("description"),
  //       logo: logoUrl,
  //     };

  //     console.log("Company Data:", companyData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      let logoUrl = company?.logo || "";

      if (logo) {
        const imageFormData = new FormData();
        imageFormData.append("image", logo);

        const uploadRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          {
            method: "POST",
            body: imageFormData,
          }
        );

        const uploadData = await uploadRes.json();
        logoUrl = uploadData.data.display_url;
      }

      const companyData = {
        companyName: formData.get("companyName"),
        industry: formData.get("industry"),
        website: formData.get("website"),
        location: formData.get("location"),
        employeeCount: formData.get("employeeCount"),
        description: formData.get("description"),
        logo: logoUrl,
        status: company?.status || "Pending",
        recruiterId: recruiter.id
      };

      console.log("Company Data:", companyData);

      setCompany(companyData);
      const payload = CreateCompany(companyData)
      if(payload.insertedId){
        toast.success("Company profile create successfully")
      }
      setShowForm(false);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };


  if (!company && !showForm) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-[500px] bg-black border border-white/10 rounded-2xl p-8 text-center">

          <h2 className="text-white text-2xl font-bold">
            No Company Registered
          </h2>

          <p className="text-white/50 mt-2">
            Register your company to start hiring.
          </p>

          <Button
            color="primary"
            className="mt-5 w-full"
            onPress={() => setShowForm(true)}
          >
            Register Company
          </Button>

        </div>
      </div>
    );
  }

  if (company && !showForm && !isEditing) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-[700px] bg-black border border-white/10 rounded-2xl p-8">

          <div className="flex justify-between">

            <div className="flex gap-4">

              {company.logo && (
                <img
                  src={company.logo}
                  alt=""
                  className="w-20 h-20 rounded-xl object-cover"
                />
              )}

              <div>
                <h2 className="text-white text-2xl font-bold">
                  {company.companyName}
                </h2>

                <p className="text-white/50">
                  {company.industry}
                </p>
              </div>
            </div>

            <Button
              color="primary"
              onPress={() => {
                setShowForm(true);
                setIsEditing(true);
              }}
            >
              Edit
            </Button>
          </div>

          <div className="mt-4">
            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
              {company.status}
            </span>
          </div>

          <div className="mt-6 space-y-4 text-white">

            <div>
              <p className="text-white/50">Website</p>
              <p>{company.website}</p>
            </div>

            <div>
              <p className="text-white/50">Location</p>
              <p>{company.location}</p>
            </div>

            <div>
              <p className="text-white/50">Employees</p>
              <p>{company.employeeCount}</p>
            </div>

            <div>
              <p className="text-white/50">Description</p>
              <p>{company.description}</p>
            </div>

          </div>

        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
      <div className="w-[520px] bg-black border border-white/10 rounded-2xl p-8">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-white text-xl font-semibold">
            Register New Company
          </h2>
          <p className="text-white/40 text-sm mt-1">
            Enter your business details to start hiring.
          </p>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-4">

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div className=" flex flex-col">
              <Label className="text-white">companyName :</Label>
              <Input
                defaultValue={company?.companyName || ""}
                name="companyName"
                placeholder="Company Name"
                required />
            </div>



            <Select name="industry" defaultValue="Technology">
              <Label className="text-white">Industry</Label>

              <Select.Trigger className="w-full border border-white/10 rounded-xl px-3 py-2">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {industries.map((item) => (
                    <ListBox.Item key={item} id={item} textValue={item}>
                      {item}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 ">
            <div>
              <Label className="text-white">Website Url :</Label>
              <Input
                defaultValue={company?.website || ""}
                name="website"
                placeholder="www.company.com"
                required
              />
            </div>
            <div>
              <Label className="text-white">Country :</Label>
              <Input
                name="location"
                defaultValue={company?.location || ""}
                placeholder="City, Country"

                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">

            <Select name="employeeCount" defaultValue="1-10">
              <Label className="text-white">Employees</Label>

              <Select.Trigger className="w-full border border-white/10 rounded-xl px-3 py-2 ">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {employeeRanges.map((item) => (
                    <ListBox.Item key={item} id={item} textValue={item}>
                      {item}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Logo Upload */}
            <div className="flex flex-col gap-2">
              <span className="text-white text-sm">Company Logo</span>

              <label className="flex items-center gap-3 border border-white rounded-xl px-3 py-2 cursor-pointer bg-white">
                <div className="w-9 h-9 flex items-center justify-center">
                  {logo ? (
                    <img
                      src={URL.createObjectURL(logo)}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <Upload size={16} className="text-black" />
                  )}
                </div>

                <div className="text-sm text-black">
                  {logo ? logo.name.slice(0, 14) : "Upload image"}
                </div>

                <input
                  type="file"
                  hidden
                  // required
                  accept="image/*"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
              </label>
            </div>
          </div>

          {/* Description */}
          <TextArea
            name="description"
            defaultValue={company?.description || ""}
            placeholder="Company description..."
            className="h-32 w-full"
          />

          {/* Buttons */}
          <div className="flex gap-3">
            <Button type="reset" variant="bordered" className="flex-1">
              Cancel
            </Button>

            <Button
              type="submit"
              color="primary"
              className="flex-1 font-semibold"
              startContent={<Check size={16} />}
            >
              {isEditing ? "Update Company" : "Register Company"}
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
}