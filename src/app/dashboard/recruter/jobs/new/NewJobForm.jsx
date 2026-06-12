"use client";

import { CreateJob } from "@/lib/actions/jobs";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function NewJobForm( {company}) {
  console.log(company)
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      companyId: "company_123",
      status: "active",
      isPubliclyVisible: true
    }
    const res = await CreateJob(payload)
       if(res.insertedId){
        toast.success("Job posted successfully!")
        e.target.reset();
        redirect("/dashboard/recruter")
       }
    // console.log(data);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        Post a New Job
      </h1>

      <p className="text-default-500 mb-8">
        Create and publish a new job opportunity.
      </p>

      <Form className="flex flex-col gap-8" onSubmit={onSubmit}>
        {/* Job Information */}
        <div className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Job Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <TextField isRequired name="jobTitle">
              <Label>Job Title</Label>
              <Input placeholder="Frontend Developer" />
              <FieldError />
            </TextField>

            <div>
              <Label>Job Category</Label>
              <select
                name="category"
                className="w-full border rounded-lg p-3 mt-2"
                required >
                <option value="">Select Category</option>
                <option value="development">
                  Software Development
                </option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
              </select>
            </div>

            <div>
              <Label>Job Type</Label>
              <select
                name="jobType"
                className="w-full border rounded-lg p-3 mt-2"
                required
              >
                <option value="">Select Type</option>
                <option value="full-time">
                  Full Time
                </option>
                <option value="part-time">
                  Part Time
                </option>
                <option value="contract">
                  Contract
                </option>
                <option value="internship">
                  Internship
                </option>
              </select>
            </div>

            <TextField isRequired name="deadline">
              <Label>Application Deadline</Label>
              <Input type="date" />
              <FieldError />
            </TextField>

            <TextField isRequired name="salaryMin">
              <Label>Minimum Salary</Label>
              <Input
                type="number"
                placeholder="500"
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="salaryMax">
              <Label>Maximum Salary</Label>
              <Input
                type="number"
                placeholder="1500"
              />
              <FieldError />
            </TextField>

            <div>
              <Label>Currency</Label>
              <select
                name="currency"
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <TextField isRequired name="city">
              <Label>City</Label>
              <Input placeholder="Dhaka" />
              <FieldError />
            </TextField>

            <TextField isRequired name="country">
              <Label>Country</Label>
              <Input placeholder="Bangladesh" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Job Description */}
        <div className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Job Description
          </h2>

          <div className="flex flex-col gap-5">
            <div>
              <Label>Responsibilities</Label>
              <textarea
                name="responsibilities"
                rows={4}
                className="w-full border rounded-lg p-3 mt-2"
                required
              />
            </div>

            <div>
              <Label>Requirements</Label>
              <textarea
                name="requirements"
                rows={4}
                className="w-full border rounded-lg p-3 mt-2"
                required
              />
            </div>

            <div>
              <Label>Benefits</Label>
              <textarea
                name="benefits"
                rows={4}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Company Information
          </h2>

          <TextField>
            <Label>Company Name</Label>
            <Input
              value="Tech Solutions Ltd"
              readOnly
            />
            <Description>
              Auto-filled from approved company.
            </Description>
          </TextField>
        </div>

        <div className="flex justify-end">
          <Button type="submit" color="primary">
            <Check />
            Publish Job
          </Button>
        </div>
      </Form>
    </div>
  );
}