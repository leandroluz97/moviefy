
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card"
import { Link } from "react-router-dom";

export const RegisterView = () => {
 return (
    <div className="flex items-center h-full justify-center bg-background">
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription>Create a new account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col text-left space-y-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="flex flex-col text-left space-y-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
              <div className="flex flex-col text-left space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john.doe@example.com" type="email" />
              </div>
              <div className="flex flex-col text-left space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="•••••••••" type="email" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-slate-800 text-white">Register</Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{' '}
              <Link  to="/auth/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  )
};
