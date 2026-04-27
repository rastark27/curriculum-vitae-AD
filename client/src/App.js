import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Row, Col, Card, Table, ListGroup, Badge, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faTrophy, faLaptop } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cv');
        setCvData(response.data);
      } catch (error) {
        console.error('Error fetching CV data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  if (!cvData) {
    return (
      <div className="App">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Alert variant="danger">Error loading CV data</Alert>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="App">
      <Container className="mt-4">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="text-center mb-3">Curriculum Vitae</h1>
            <h2 className="text-center text-muted">{cvData.profile.split('.')[0]}</h2>
            <p className="text-center lead">{cvData.profile}</p>
          </Col>
        </Row>

        {/* Academic Education */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0">Historial Académico</h3>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {cvData.education.map((edu, index) => (
                    <ListGroup.Item key={index} className="border-0">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{edu.degree}</h5>
                        <small className="text-muted">{edu.period}</small>
                      </div>
                      <p className="mb-1">{edu.institution}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Courses and Certifications */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-success text-white">
                <h3 className="mb-0">Cursos y Capacitaciones</h3>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {cvData.courses.map((course, index) => (
                    <ListGroup.Item key={index} className="border-0">
                      {course}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Work Experience */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-info text-white">
                <h3 className="mb-0">Experiencia Laboral</h3>
              </Card.Header>
              <Card.Body>
                {cvData.experience.map((exp, index) => (
                  <Card key={index} className="mb-3 border-0 shadow-sm">
                    <Card.Header className="bg-light">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-0">{exp.position}</h5>
                        <small className="text-muted">{exp.period}</small>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                      <p className="card-text">{exp.description}</p>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Technical Skills */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-warning text-white">
                <h3 className="mb-0">Habilidades Técnicas</h3>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {cvData.technicalSkills.map((skill, index) => (
                    <ListGroup.Item key={index} className="border-0 d-flex align-items-center">
                      <Badge bg="primary" rounded-pill me-2>
                        <FontAwesomeIcon icon={faCheck} />
                      </Badge>
                      {skill}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Personal Skills */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-danger text-white">
                <h3 className="mb-0">Habilidades Personales</h3>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {cvData.personalSkills.map((skill, index) => (
                    <ListGroup.Item key={index} className="border-0 d-flex align-items-center">
                      <Badge bg="secondary" rounded-pill me-2>
                        <FontAwesomeIcon icon={faStar} />
                      </Badge>
                      {skill}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Achievements */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-dark text-white">
                <h3 className="mb-0">Logros</h3>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {cvData.achievements.map((achievement, index) => (
                    <ListGroup.Item key={index} className="border-0 d-flex align-items-start">
                      <Badge bg="info" rounded-pill me-2 mt-1>
                        <FontAwesomeIcon icon={faTrophy} />
                      </Badge>
                      <div>{achievement}</div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Languages */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0">Idiomas</h3>
              </Card.Header>
              <Card.Body>
                <Table className="table table-borderless">
                  <tbody>
                    {cvData.languages.map((lang, index) => (
                      <tr key={index}>
                        <td>{lang.language}</td>
                        <td className="text-end">{lang.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Computer Skills */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-success text-white">
                <h3 className="mb-0">Informática</h3>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {cvData.computerSkills.map((skill, index) => (
                    <ListGroup.Item key={index} className="border-0 d-flex align-items-center">
                      <Badge bg="light" text-dark rounded-pill me-2>
                        <FontAwesomeIcon icon={faLaptop} />
                      </Badge>
                      {skill}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;