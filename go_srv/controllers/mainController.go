package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"go_srv/middleware"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

// Category struct with two values
type Photos struct {
	Id   uint   `json:"categoryId"`
	Name string `json:"name"`
}

type AlbumResponse struct {
	ID     int    `json:"id"`
	UserId int    `json:"userId"`
	Title  string `json:"title"`
}

func PhotosList(c *fiber.Ctx) error {
	//Token authenticate
	headerToken := c.Get("Authorization")
	if headerToken == "" {
		return c.Status(401).JSON(fiber.Map{
			"success": false,
			"message": "Unauthorized",
			"error":   map[string]interface{}{},
		})
	}
	if err := middleware.AuthenticateToken(middleware.SplitToken(headerToken)); err != nil {
		return c.Status(401).JSON(fiber.Map{
			"success": false,
			"message": "Unauthorized",
			"error":   map[string]interface{}{},
		})
	}
	//Token authenticate
	response, err := http.Get("https://jsonplaceholder.typicode.com/photos")

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}
	defer response.Body.Close();

	result, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	var responseObject []AlbumResponse
	json.Unmarshal(result, &responseObject)

	return c.JSON(fiber.Map{
		"success": true,
		"Message": "Success",
		"data":    responseObject,
	})

}

//Open route
func AlbumsList(c *fiber.Ctx) error {
	response, err := http.Get("https://jsonplaceholder.typicode.com/albums")

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	defer response.Body.Close()

	result, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}

	var responseObject []AlbumResponse
	json.Unmarshal(result, &responseObject)

	return c.JSON(fiber.Map{
		"success": true,
		"Message": "Success",
		"data":    responseObject,
	})

}
