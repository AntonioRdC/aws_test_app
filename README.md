## Requirements

Before starting, you will need to have Node.js installed on your machine.

## Endpoints

### Swagger Documentation Endpoint
|               Route              |    Method    |               Description                 |
|   ----------------------------   | :----------: |  ---------------------------------------  |
|  `/api-docs`                     |    GET       |  Get Documentation in Swagger             |

### Tutor Endpoints
|               Route              |    Method    |               Description                 |
|   ----------------------------   | :----------: |  ---------------------------------------  |
|  `/tutors`                       |    GET       |  Retrieves all tutors                     |
|  `/tutor`                        |    POST      |  Create a new tutor                       |
|  `/tutor/:id`                    |    PUT       |  Updates a tutor                          |
|  `/tutor/:id`                    |    DELETE    |  Deletes a tutor                          |

### Pet Endpoints
|               Route              |    Method    |               Description                  |
|   -------------------------      | :----------: |  ---------------------------------------   |
|  `/pet/:tutorId`                 |    POST      |  Creates a pet and adds it to a tutor      |
|  `/pet/:petId/tutor/:tutorId`    |    PUT       |  updates a pet's info                      |
|  `/pet/:petId/tutor/:tutorId`    |    DELETE    |  deletes a pet from a tutor                |

## Schema

### Tutor Table
|         FieldName        |    Type   | Required | Unique |
|--------------------------|:---------:|:--------:|:------:|
| `_id`                    | ObjectId  | true     | true   |
| `name`                   | String    | true     | false  |
| `phone`                  | String    | true     | true   |
| `email`                  | String    | true     | true   |
| `date_of_birth`          | String    | true     | false  |
| `zip_code`               | Number    | true     | true   |

```bash
# Example Tutor .json
{ 
    id: 1, 
    name: "Jonas", 
    phone: "85989323895", 
    email: "jonas@paidepet.com", 
    date_of_birth: "1993-12-12 10:10", 
    zip_code: "61760000" 
}
```


### Pet Table
|         FieldName        |    Type   | Required | Unique |
|--------------------------|:---------:|:--------:|:------:|
| `_id`                    | ObjectId  | true     | true   |
| `name`                   | String    | true     | false  |
| `species`                | String    | true     | false  |
| `carry`                  | String    | true     | false  |
| `weight`                 | Number    | true     | false  |
| `date_of_birth`          | String    | true     | false  |

```bash
# Example Pet .json
{ 
    id: 1, 
    name: "Lilo", 
    species: "dog", 
    carry: "p", 
    weight: 5, 
    date_of_birth: "1993-12-12 10:10"
}
```