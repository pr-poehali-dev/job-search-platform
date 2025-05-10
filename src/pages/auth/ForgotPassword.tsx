
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Симуляция запроса к API
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      console.log("Запрос на восстановление пароля:", email);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Восстановление пароля</h2>
          <p className="mt-2 text-sm text-gray-600">
            Введите email, указанный при регистрации, и мы отправим вам инструкции по сбросу пароля
          </p>
        </div>

        <Card>
          {isSubmitted ? (
            <CardContent className="pt-6">
              <Alert className="bg-green-50 text-green-800 border-green-200">
                <Icon name="CheckCircle" className="h-5 w-5 text-green-500" />
                <AlertDescription>
                  Инструкции по сбросу пароля отправлены на вашу электронную почту. 
                  Пожалуйста, проверьте свою почту и следуйте указанным шагам.
                </AlertDescription>
              </Alert>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link to="/login">Вернуться к входу</Link>
                </Button>
              </div>
            </CardContent>
          ) : (
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Забыли пароль?</CardTitle>
                <CardDescription>
                  Мы отправим вам ссылку для сброса пароля
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                      Отправка...
                    </>
                  ) : "Отправить инструкции"}
                </Button>
                <Button asChild variant="link" className="px-0">
                  <Link to="/login">Вернуться к входу</Link>
                </Button>
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
