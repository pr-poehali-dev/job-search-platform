
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  // Получение токена из URL query параметров
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Проверка на соответствие паролей
    if (newPassword !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    
    // Проверка на наличие токена
    if (!token) {
      setError("Недействительная ссылка для сброса пароля");
      return;
    }
    
    setLoading(true);
    
    // Симуляция запроса к API
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      console.log("Сброс пароля с токеном:", token, "Новый пароль:", newPassword);
      
      // Через 3 секунды перенаправляем на страницу входа
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }, 1500);
  };

  // Проверка наличия токена
  React.useEffect(() => {
    if (!token) {
      setError("Недействительная или истекшая ссылка для сброса пароля");
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Создание нового пароля</h2>
          <p className="mt-2 text-sm text-gray-600">
            Придумайте надежный пароль для вашего аккаунта
          </p>
        </div>

        <Card>
          {isSubmitted ? (
            <CardContent className="pt-6">
              <Alert className="bg-green-50 text-green-800 border-green-200">
                <Icon name="CheckCircle" className="h-5 w-5 text-green-500" />
                <AlertDescription>
                  Ваш пароль успешно изменен! Сейчас вы будете перенаправлены на страницу входа.
                </AlertDescription>
              </Alert>
              <div className="mt-6 text-center">
                <Button asChild>
                  <Link to="/login">Перейти ко входу</Link>
                </Button>
              </div>
            </CardContent>
          ) : (
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Новый пароль</CardTitle>
                <CardDescription>
                  Создайте новый пароль для вашей учетной записи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <Icon name="AlertCircle" className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Новый пароль</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    disabled={!token}
                    minLength={8}
                  />
                  <p className="text-xs text-muted-foreground">
                    Минимум 8 символов, включая буквы и цифры
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={!token}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading || !token}
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                      Сохранение...
                    </>
                  ) : "Сохранить новый пароль"}
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

export default ResetPassword;
