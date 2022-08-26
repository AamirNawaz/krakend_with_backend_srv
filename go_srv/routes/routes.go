package routes

import (
	"github.com/gofiber/fiber/v2"
	"go_srv/controllers"
)

func Setup(app *fiber.App) {
	//Category routes
	app.Get("/photos", controllers.PhotosList)
	app.Get("/albums", controllers.AlbumsList)
}
