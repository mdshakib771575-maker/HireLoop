"use client";

import { useState } from "react";
import { Input, Button, Card } from "@heroui/react";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { Description, Label, Radio, RadioGroup } from "@heroui/react";


export default function SignupPage() {
    const [loading, setLoading] = useState(false);
    const handleSignup = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
       

        try {
            setLoading(true);

            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password,
                role
            });

            if (error) {
                toast.error(error.message || "Signup Failed");
                return;
            }

            toast.success("Account Created Successfully!");
            form.reset();

            console.log(data);
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
            <Card className="w-full max-w-md shadow-xl">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-center mb-2">
                        Create Account
                    </h1>

                    <p className="text-center text-default-500 mb-6">
                        Join our pet adoption community
                    </p>

                    <form onSubmit={handleSignup} className="space-y-5">
                        <Input
                            name="name"
                            label="Full Name"
                            placeholder="Enter your name"
                            required
                            className="w-full"
                        />

                        <Input
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            required
                            className="w-full"
                        />

                        <Input
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter password"
                            required
                            className="w-full"
                        />
                        <div className="flex flex-col gap-4">
                            <Label>Subscription plan</Label>
                            <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
                                <Radio value="seeker">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Seeker</Label>
                           
                                    </Radio.Content>
                                </Radio>
                                <Radio value="recruter">
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <Radio.Content>
                                        <Label>Recruter</Label>
                                       
                                    </Radio.Content>
                                </Radio>
                               
                            </RadioGroup>
                        </div>


                        <Button
                            type="submit"
                            color="primary"
                            className="w-full"
                            isLoading={loading}
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}