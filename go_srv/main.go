package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"go_srv/routes"
	"log"
	"os"
)

func init() {

	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {

	app := fiber.New()
	app.Static("/", "./assets")

	app.Use(cors.New())
	//routing
	routes.Setup(app)
	app.Listen("192.168.8.104:" + (os.Getenv("PORT")))

}
