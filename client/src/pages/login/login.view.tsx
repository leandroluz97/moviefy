
import { Link } from "react-router-dom";
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label/Label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card"

export const LoginView = () => {
  return (<div className="flex items-center h-full justify-center">
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
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
          <Button className="w-full bg-slate-800 text-white">Login</Button>
            <p className="text-sm text-center text-gray-600">
             Don't have an account?{' '}
              <Link  to="/auth/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
        </CardFooter>
      </Card>
    </div>)
};
