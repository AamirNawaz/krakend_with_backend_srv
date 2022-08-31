package main

import (
	"go_srv/routes"
	"log"
	"net"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
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

	//Getting host ip
	host, _ := os.Hostname()
	addrs, _ := net.LookupIP(host)

	err := app.Listen((addrs[1].String()) + ":" + (os.Getenv("PORT")))
	if err != nil {
		log.Fatal(err)
	}

}
